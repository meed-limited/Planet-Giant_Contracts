// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;

import "./ERC1155/IERC1155.sol";
import "./ERC1155/ERC1155Holder.sol";
import "./utils/Counters.sol";
import "./utils/Ownable.sol";
import "./utils/ReentrancyGuard.sol";

contract Marketplace is ERC1155Holder, Ownable, ReentrancyGuard {
    using Counters for Counters.Counter;
    Counters.Counter private _itemIds;
    Counters.Counter private _itemsSold;

    struct MarketItem {
        uint256 itemId;
        address nftContract;
        uint256 tokenId;
        address payable seller;
        address payable owner;
        uint256 price;
        bool sold;
    }

    mapping(uint256 => MarketItem) private idToMarketItem;

    event MarketItemCreated(
        uint256 indexed itemId,
        address indexed nftContract,
        uint256 indexed tokenId,
        address seller,
        address owner,
        uint256 price,
        bool sold
    );

    event MarketItemSold(uint256 indexed itemId, address owner);
    event MarketSaleCancelled(uint256 indexed itemId, address owner);

    function createMarketItem(
        address nftContract,
        uint256 tokenId,
        uint256 price
    ) external nonReentrant {
        require(price > 0, "Marketplace: price too low");
        _createMarketItem(nftContract, tokenId, price);
    }

    function createMarketSale(address nftContract, uint256 itemId) external payable nonReentrant {
        uint256 price = idToMarketItem[itemId].price;
        uint256 tokenId = idToMarketItem[itemId].tokenId;
        bool sold = idToMarketItem[itemId].sold;
        require(msg.value == price, "Marketplace: wrong amount");
        require(!sold, "Marketplace: sale alredy over");

        idToMarketItem[itemId].owner = payable(msg.sender);
        _itemsSold.increment();
        idToMarketItem[itemId].sold = true;
        idToMarketItem[itemId].seller.transfer(msg.value);
        IERC1155(nftContract).safeTransferFrom(address(this), msg.sender, tokenId, 1, "");
        emit MarketItemSold(itemId, msg.sender);
    }

    function cancelSale(uint256 itemId) external nonReentrant {
        require(msg.sender == idToMarketItem[itemId].seller, "Marketplace: not owner");
        require(!idToMarketItem[itemId].sold, "Marketplace: item already sold");
        _cancelSale(itemId);
    }

    /* View:
     *********/

    function fetchMarketItems() external view returns (MarketItem[] memory) {
        uint256 itemCount = _itemIds.current();
        uint256 unsoldItemCount = _itemIds.current() - _itemsSold.current();
        uint256 currentIndex = 0;

        MarketItem[] memory items = new MarketItem[](unsoldItemCount);
        for (uint256 i = 0; i < itemCount; i++) {
            if (idToMarketItem[i + 1].owner == address(0)) {
                uint256 currentId = i + 1;
                MarketItem storage currentItem = idToMarketItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }

    /* Private:
     ************/

    function _createMarketItem(
        address nftContract,
        uint256 tokenId,
        uint256 price
    ) private {
        _itemIds.increment();
        uint256 itemId = _itemIds.current();

        idToMarketItem[itemId] = MarketItem(
            itemId,
            nftContract,
            tokenId,
            payable(msg.sender),
            payable(address(0)),
            price,
            false
        );

        IERC1155(nftContract).safeTransferFrom(msg.sender, address(this), tokenId, 1, "");
        emit MarketItemCreated(itemId, nftContract, tokenId, msg.sender, address(0), price, false);
    }

    function _cancelSale(uint256 itemId) private {
        IERC1155(idToMarketItem[itemId].nftContract).safeTransferFrom(
            address(this),
            msg.sender,
            idToMarketItem[itemId].tokenId,
            1,
            ""
        );
        delete idToMarketItem[itemId];
        emit MarketSaleCancelled(itemId, msg.sender);
    }
}

// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;

// import "hardhat/console.sol";
import "./ERC1155/ERC1155.sol";
import "./utils/Ownable.sol";

/** 
@title NFT ERC1155 contract to be used with <Planet Giant> game - Built for the Cronos Hackathon - Sept 2022
@author @Pedrojok01
@notice Simple design with 2 kind of NFTs: Open & Limited 
    Open: NFTs lvl 1 - can be minted by anyone (given to boost adoption);
    Limited: NFTs lvl 2+ - can only be minted by the owner; either sold on Marketplace or won through game achievments;
*/
contract NFT is ERC1155, Ownable {
    /* Storage:
     ************/
    // NFTs level 1
    uint256 private constant SPEED_1 = 11;
    uint256 private constant TIME_1 = 12;
    uint256 private constant JUMP_1 = 13;
    // NFTs level 2
    uint256 private constant SPEED_2 = 21;
    uint256 private constant TIME_2 = 22;
    uint256 private constant JUMP_2 = 23;
    // NFTs level 3
    uint256 private constant SPEED_3 = 31;
    uint256 private constant TIME_3 = 32;
    uint256 private constant JUMP_3 = 33;

    /**
    @dev Automatically mint some limited NFTs to feed the marketplace;
    @param _recipient Address which will receive the limited NFTs;
    @param _amount Amount of each NFTs to be minted to the recipient;
    */
    constructor(address _recipient, uint256 _amount)
        ERC1155("ipfs://QmWdExuFrZtsxBbbK289uJe9GfHM21Jmh1jQpSP6pSJhji/metadata/{id}.json")
    {
        _mint(_recipient, SPEED_2, _amount, "");
        _mint(_recipient, TIME_2, _amount, "");
        _mint(_recipient, JUMP_2, _amount, "");
        _mint(_recipient, SPEED_3, _amount, "");
        _mint(_recipient, TIME_3, _amount, "");
        _mint(_recipient, JUMP_3, _amount, "");
    }

    /* Public functions:
     ********************/

    /**
    @dev Open mint, any player can mint the level 1 NFTs; NFTs are basically given to encourage blockchain adoption;
    @param perks Allow to choose the kind of NFT to be minted;
    @param recipient Address which will receive the limited NFTs;
    */
    function mint(uint256 perks, address recipient) external {
        require(perks > 10 && perks <= 13, "wrong parameter");
        _mint(recipient, perks, 1, "");
    }

    /* Restricted functions:
     ************************/

    /**
    @dev Limited mint, only the owner can mint the level 2 and above NFTs;
    @param perks Allow to choose the kind of NFT to be minted;
    @param recipient Address which will receive the limited NFTs;
    @param amount Amount of NFTs to be minted to the recipient;
    */
    function mintLimited(
        uint256 perks,
        address recipient,
        uint256 amount
    ) external onlyOwner {
        require(_isPerksValid(perks), "wrong parameter");
        uint256 tokenId = _getPerks(perks);
        _mint(recipient, tokenId, amount, "");
    }

    /* Private functions:
     **********************/

    function _getPerks(uint256 _perks) private pure returns (uint256) {
        require(_isPerksValid(_perks), "wrong parameter");
        if (_perks == 11) {
            return SPEED_1;
        } else if (_perks == 12) {
            return TIME_1;
        } else if (_perks == 13) {
            return JUMP_1;
        } else if (_perks == 21) {
            return SPEED_2;
        } else if (_perks == 22) {
            return TIME_2;
        } else if (_perks == 23) {
            return JUMP_2;
        } else if (_perks == 31) {
            return SPEED_3;
        } else if (_perks == 32) {
            return TIME_3;
        } else {
            return JUMP_3;
        }
    }

    function _isPerksValid(uint256 _perks) private pure returns (bool) {
        if ((_perks > 10 && _perks <= 13) || (_perks > 20 && _perks <= 23) || (_perks > 30 && _perks <= 33)) {
            return true;
        } else {
            return false;
        }
    }
}

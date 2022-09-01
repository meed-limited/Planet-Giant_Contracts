// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;

// import "hardhat/console.sol";
import "./ERC1155/ERC1155.sol";

contract NFT is ERC1155 {
    uint256 private constant SPEED = 1;
    uint256 private constant TIME = 2;
    uint256 private constant JUMP = 3;

    address private admin;

    constructor(address _recipient)
        ERC1155("ipfs://QmerxAzTUKJYz8ghuAuMmRBiZRZ7xeSQ5ePrmLAkR69bDo/metadata/{id}.json")
    {
        admin = _recipient;
        _mint(_recipient, SPEED, 10, "");
        _mint(_recipient, TIME, 10, "");
        _mint(_recipient, JUMP, 10, "");
    }

    function mint(uint256 perks, address recipient) public {
        // require(msg.sender == admin, "Not authorized");
        uint256 tokenId = _getPerks(perks);
        _mint(recipient, tokenId, 1, "");
    }

    /* Restricted functions:
     ************************/

    function setNewAdmin(address _newAdmin) external {
        require(msg.sender == admin, "Not authorized");
        admin = _newAdmin;
    }

    /* Private functions:
     **********************/

    function _getPerks(uint256 _perks) private pure returns (uint256) {
        require(_perks > 0 && _perks <= 3, "wrong parameter");
        if (_perks == 1) {
            return SPEED;
        } else if (_perks == 2) {
            return TIME;
        } else {
            return JUMP;
        }
    }
}

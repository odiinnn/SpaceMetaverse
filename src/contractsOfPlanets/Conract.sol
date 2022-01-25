pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NFT1 is ERC721Enumerable, Ownable {
    using Strings for uint256;

    string public baseURI;
    string public baseExtension = ".json";
    uint256 public cost = 0.05 ether;
    uint256 public costwhite = 0.1 ether;
    uint256 public maxSupply = 10000;
    uint256 public maxMintAmount = 20;
    bool public paused = false;
    mapping(address => bool) public whitelisted;

    constructor(
    string memory _name,
    string memory _symbol,
    string memory _initBaseURI
    ) ERC721(_name, _symbol) {
    setBaseURI(_initBaseURI);
    mint(msg.sender, 1, 1);
    mint(msg.sender, 1, 15);
    }

    // internal
    function _baseURI() internal view virtual override returns (string memory) {
    return baseURI;
    }

    // public
    function mint(address _to, uint256 _mintAmount, uint256 _id) public payable {
    uint256 supply = totalSupply();
    require(!paused);
    require(_mintAmount > 0);
    require(_mintAmount <= maxMintAmount);
    require(supply + _mintAmount <= maxSupply);

    if (msg.sender != owner()) {
        if(whitelisted[msg.sender] != true) {
          require(msg.value >= cost * _mintAmount);
        }
    }

    for (uint256 i = 1; i <= _mintAmount; i++) {
      _safeMint(_to, _id);
    }
    }

    function walletOfOwner(address _owner)
    public
    view
    returns (uint256[] memory)
    {
    uint256 ownerTokenCount = balanceOf(_owner);
    uint256[] memory tokenIds = new uint256[](ownerTokenCount);
    for (uint256 i; i < ownerTokenCount; i++) {
      tokenIds[i] = tokenOfOwnerByIndex(_owner, i);
    }
    return tokenIds;
    }

    function getBalance(
    ) public view returns(uint256){
        return address(this).balance;
    }

    function tokenURI(uint256 tokenId)
    public
    view
    virtual
    override
    returns (string memory)
    {
    require(
      _exists(tokenId),
      "ERC721Metadata: URI query for nonexistent token"
    );

    string memory currentBaseURI = _baseURI();
    return bytes(currentBaseURI).length > 0
        ? string(abi.encodePacked(currentBaseURI, tokenId.toString(), baseExtension))
        : "";
    }

    //only owner
    function setCost(uint256 _newCost) public onlyOwner {
    cost = _newCost;
    }

    function setmaxMintAmount(uint256 _newmaxMintAmount) public onlyOwner {
    maxMintAmount = _newmaxMintAmount;
    }

    function setBaseURI(string memory _newBaseURI) public onlyOwner {
    baseURI = _newBaseURI;
    }

    function setBaseExtension(string memory _newBaseExtension) public onlyOwner {
    baseExtension = _newBaseExtension;
    }

    function pause(bool _state) public onlyOwner {
    paused = _state;
    }

    function whitelistUser(address _user) public payable {
    whitelisted[_user] = true;
    require(msg.value >= costwhite);
    }

    function removeWhitelistUser(address _user) public {
    whitelisted[_user] = false;
    }

    function withdraw() public payable {
    if(whitelisted[msg.sender] == true){
            (bool hs, ) = payable(0x009d976b070eAbC3686B277a5F74eBe93E970FbA).call{value: address(this).balance * 5 / 100}("");
        require(hs);
            (bool os, ) = payable(msg.sender).call{value: address(this).balance}("");
        require(os);
    }



    }

    function planetPayment() public payable {

    (bool os, ) = payable(0x009d976b070eAbC3686B277a5F74eBe93E970FbA).call{value: cost}("");
    require(os);

    }
}
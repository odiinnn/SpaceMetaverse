pragma solidity >=0.7.0 <0.9.0;


contract Sun {

  function getBalance(
    ) public view returns(uint256){
        return address(this).balance;
    }

 function burnSun() public payable {
    require(msg.value >= 0);
  }

  function withdraw() public payable {
        (bool hs, ) = payable(0x009d976b070eAbC3686B277a5F74eBe93E970FbA).call{value: address(this).balance}("");
    require(hs);
  }

}
anyfun = () => {
var formdata = new FormData();
formdata.append("__RequestVerificationToken", "cLTIkWDfBNffA7bc9GhoMzWA46ibdhCBVDKoLVLIPwkTBfYvD_pGKW6KetnaFPeVfDq97FeA5W1lByqfUXRajCHhywjZR03A5kdISIDI2Yk1");
formdata.append("seat", "XXXXX");
formdata.append("mother", "XXXXXX");

var requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};

setInterval(function(){ fetch("http://result.mh-ssc.ac.in/Home/ViewResult", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));}, 2000);

}

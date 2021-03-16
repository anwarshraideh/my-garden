'use strict';

let arrOfRoses = [];

let tSection = document.getElementById( 'tableSection' );
let tableEle = document.getElementById( 'table1' );
tSection.appendChild( tableEle );
let tbodyEle = document.createElement( 'tbody' );
tableEle.appendChild( tbodyEle );


function Garden( name, image, season ) {
  this.name = name;
  this.image = `/img/${image}.jpeg`;
  this.season = season;


  arrOfRoses.push( this );
}


function handleSubmission( event ) {

  event.preventDefault();

  let name = event.target.name.value;
  let image = event.target.image.value;
  let Season = event.target.Season.value;

  new Garden( name, image, Season );
  localStorage.setItem( 'roses', JSON.stringify( arrOfRoses ) );
  renderTable();


}

function header() {

  let headRow = document.createElement( 'tr' );
  tableEle.appendChild( headRow );

  let th1 = document.createElement( 'th' );
  headRow.appendChild( th1 );
  th1.textContent = '#Image';

  let th2 = document.createElement( 'th' );
  headRow.appendChild( th2 );
  th2.textContent = 'Name';

  let th3 = document.createElement( 'th' );
  headRow.appendChild( th3 );
  th3.textContent = 'Season';

}

function renderTable() {

  tbodyEle.remove();
  tbodyEle = document.createElement( 'tbody' );
  tableEle.appendChild( tbodyEle );

  for ( let index = 0; index < arrOfRoses.length; index++ ) {

    let fRow = document.createElement( 'tr' );
    tbodyEle.appendChild( fRow );

    let td1 = document.createElement( 'td' );
    fRow.appendChild( td1 );

    let imageEle = document.createElement( 'img' );
    td1.appendChild( imageEle );
    imageEle.setAttribute( 'src', arrOfRoses[index].image );
    imageEle.setAttribute( 'style', 'width:15% ; height:90px;' );


    let td2 = document.createElement( 'td' );
    fRow.appendChild( td2 );
    td2.textContent = arrOfRoses[index].name;

    let td3 = document.createElement( 'td' );
    fRow.appendChild( td3 );
    td3.textContent = arrOfRoses[index].season;


  }

}

function checkLs() {
  if ( localStorage.getItem( 'roses' ) ) {
    arrOfRoses = JSON.parse( localStorage.getItem( 'roses' ) );
    renderTable();

  }

}

function clear( event ) {

  event.preventDefault();
  localStorage.clear();
  checkLs();
  location.reload();

}

// eslint-disable-next-line no-undef
clearbutton.addEventListener( 'click', clear );
// eslint-disable-next-line no-undef
form1.addEventListener( 'submit', handleSubmission );
header();
checkLs();

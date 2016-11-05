//app.js
//----Model---
var initialLocs=[
  {
    title:'Simhachalam Temple',
    location:{lat: 17.7651572, lng: 83.2584714},
    img:'http://3.bp.blogspot.com/-y0mkHi2vyFc/T7yuFELShJI/AAAAAAAABWA/pkoaXR-JooA/s1600/Simhachalam-temple-2.jpg'
  },
  {
    title:'Kailasagiri',
    location:{lat: 17.7492158, lng: 83.3400129},
    img:'http://images.iimg.in/c/5429453d70b172d1d493b193-4-501-0-1411990870/google/go-indiain-vizag-beach-view-from-kailasagiri.img?crop=1'
  },
  {
    title:'Submarine Musuem',
    location:{lat: 17.7174607, lng: 83.328343},
    img:'http://discovervizag.in/wp-content/uploads/2014/07/kursura.jpg'
  },
  {
    title:'Visakhapatnam Airport',
    location:{lat: 17.7276574, lng: 83.221521},
    img:'http://1.bp.blogspot.com/-2rdNRt5EaOw/T5UWmB9ns2I/AAAAAAAAASk/TUcZWekC6ms/s1600/Visakhapatnam+New+Airport+Ariel+view.jpg'
  },
  {
    title:'CMR Central',
    location:{lat: 17.7340488, lng: 83.3163009},
    img:'http://img14.deviantart.net/381e/i/2010/331/9/9/cmr_central_by_desig9-d33rk26.jpg'
  },
  {
    title:'The Gateway Hotel',
    location:{lat: 17.7116088, lng: 83.3145753},
    img:'http://q-ec.bstatic.com/images/hotel/max400/473/4736368.jpg'
  }
];

//---View Model---

var ViewModel=function(){
  var self=this;
  this.locList=ko.observableArray([]);
  this.clickedLoc=ko.observable();
  this.chosenLoc=ko.observable();
  //this.currentLoc=[];
  this.currentLoc=ko.observableArray([]);
  initialLocs.forEach(function(locItem){
    self.locList.push(new Loc(locItem));
    //self.currentLoc.push(self.locList()[(self.locList().length)-1].title());
    self.currentLoc.push(new Loc(locItem));
    //console.log(self.currentLoc());
  });
  //this.currentLoc= ko.observable(this.locList()[0]);
  //console.log(self.clickedLoc());
  //console.log(self.locList());
  //this.selectLocation=function(){
  //   self.currentLoc()= setLocation
  //};
  this.setLocation=function(clickedLocation,item){
    self.currentLoc([]);
    //console.log(clickedLocation, item);
    //console.log(self.clickedLoc());
    //console.log('Welcome'+ self.currentLoc().length);
    self.currentLoc.push(self.clickedLoc());
    //console.log(self.currentLoc());
    //console.log(self.currentLoc()[(self.currentLoc().length)-1].title());
    showListings();
  };

   this.chosenL=function(chosenLocation){
     //console.log(chosenLocation);
     //console.log(self.chosenLoc());
      self.chosenLoc(chosenLocation);
      //self.currentLoc(self.chosenLoc());
      //this.setIcon(highlightedIcon);
      //console.log(self.chosenLoc());
      listClick();
 };
}



// Constructor
var Loc=function(data){
  this.title=ko.observable(data.title);
  this.location=ko.observable(data.location);
  this.img=ko.observable(data.img);
}

// Making the ViewModel global for access from initMap
var vm = new ViewModel();
ko.applyBindings(vm);

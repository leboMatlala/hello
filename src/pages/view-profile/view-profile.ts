import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, ToastController } from 'ionic-angular';
import { EditPage } from '../edit/edit';
import { UploadPage } from '../upload/upload';
import firebase from 'firebase';
import { CatergoriesPage } from '../catergories/catergories';
import { BookingsPage } from '../bookings/bookings';
import { LoginPage } from '../login/login';
import { SigninPage } from '../signin/signin';
/**
 * Generated class for the ViewProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-profile',
  templateUrl: 'view-profile.html',
})
export class ViewProfilePage {

  fullname;
  email;
  surname;
  pic;
  track;
  massage;
  trackarray =[];
  arrayP =[];
  genreArr =[];
  artistName;
  id;
  profile ="music";
  count=1;
  key;
  city;
  bio;
  stagename;
  userid;
  condition;

  constructor(public navCtrl: NavController, public navParams: NavParams,public actionSheetCtrl: ActionSheetController, public toastCtrl: ToastController ) {
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad ViewProfilePage');
    this.key = this.navParams.get("keyobj");

    


    firebase.auth().onAuthStateChanged((user)=> {
      if (user) {
        console.log('User has sign in');
       this.condition=true;
 
        
          
        this.userid =firebase.auth().currentUser.uid;

    
        this.id = this.key;
    
        console.log(this.id);
 
        firebase.database().ref('Registration/' +this.id).on('value', (data: any) => {
 
          let userDetails = data.val();
          
          console.log(userDetails);

          this.bio = userDetails.bio;
          this.email=userDetails.email;
          this.stagename=userDetails.stagename;
          this.city=userDetails.city;
          
          let genre = userDetails.genre;

          if(genre!=null){       

            // console.log( userDetails.genre)
             for (let a = 0; a < genre.length; a++){
               let genreobj={
                 genre:genre[a]
               }
          //  console.log(userDetails[a].Role)
            this. genreArr.push(genreobj);
               console.log(this.genreArr);
              }
  
          }else{
           // console.log("no")
          }
        



 
          if(userDetails!=null && userDetails!='')
          {
            console.log("Picture ID")
            console.log(this.id);
            firebase.database().ref('Pic/' + this.id).on('value', (data) => {
              var infor = data.val();
              this.pic = infor.url;
            let a  = Object.keys(infor);
            console.log(this.pic);
      
            }, (error) => {
      
              console.log(error.message);
      
      
            });
      
///track
            firebase.database().ref('track/' + this.id).on('value', (data) => {
              var infor = data.val();

             
           //////////
                if( infor!=null && infor!="")
                {
                   //   console.log(infor);
                      var tracks = infor.url;

                      var keys: any = Object.keys(infor);

                     // console.log(infor);
                    
                      this.arrayP=[];
                      for (var i = 0; i < keys.length; i++) {
                        var k = keys[i];
                           
                        

                      let objtrack = {
                          url: infor[k].url,
                          key: k,
                        
                        
                      }
                        this.arrayP.push(objtrack);

                       console.log(this.count);
                      }
                }
                else{
                  this.massage="no track uploaded";
                }
              
              
              //console.log("track" );
            }, (error) => {
      
              console.log(error.message);
            });

             //artist

              firebase.database().ref('artists/' + this.id).on('value', (data)=>{
                var inforArt = data.val();

                if( inforArt!=null && inforArt!="")
                {
                  var keys: any = Object.keys(inforArt);

                 // console.log(inforArt);
                
                  this.trackarray=[];
                  for (var i = 0; i < keys.length; i++) {
                    var k = keys[i];
            

                  let objart = {
                    artistName: inforArt[k].artistName,
                    trackName: inforArt[k].trackName,
                    
                    key: k,
                    count:this.count++
                    
                  }
       
                   this.artistName=objart.artistName;
                    this.trackarray.push(objart);

                  //  console.log(this.trackarray);
                  }
                }
                else{
                  this.massage="No Track uploaded yet"
                }
              });

/////
            let obj = {
              id:this.id,
              fullname: userDetails.fullname,
              email:userDetails.email,
              surname:userDetails.surname
            
           
            }

            this.fullname=obj.fullname;

           
          // console.log(obj);
          }
         
     
        })
       
 
 
      }
      else{
        console.log('User has not sign in');
        this.condition=false;
        this.id = this.key;
    
        console.log(this.id);
 
        firebase.database().ref('Registration/' +this.id).on('value', (data: any) => {
 
          let userDetails = data.val();
          
          console.log(userDetails);

          this.bio = userDetails.bio;
          this.email=userDetails.email;
          this.stagename=userDetails.stagename;
          this.city=userDetails.city;
          
          let genre = userDetails.genre;

          if(genre!=null){       

            // console.log( userDetails.genre)
             for (let a = 0; a < genre.length; a++){
               let genreobj={
                 genre:genre[a]
               }
          //  console.log(userDetails[a].Role)
            this. genreArr.push(genreobj);
               console.log(this.genreArr);
              }
  
          }else{
           // console.log("no")
          }
        



 
          if(userDetails!=null && userDetails!='')
          {
            console.log("Picture ID")
            console.log(this.id);
            firebase.database().ref('Pic/' + this.id).on('value', (data) => {
              var infor = data.val();
              this.pic = infor.url;
            let a  = Object.keys(infor);
            console.log(this.pic);
      
            }, (error) => {
      
              console.log(error.message);
      
      
            });
      
///track
            firebase.database().ref('track/' + this.id).on('value', (data) => {
              var infor = data.val();

             
           //////////
                if( infor!=null && infor!="")
                {
                   //   console.log(infor);
                      var tracks = infor.url;

                      var keys: any = Object.keys(infor);

                     // console.log(infor);
                    
                      this.arrayP=[];
                      for (var i = 0; i < keys.length; i++) {
                        var k = keys[i];
                           
                        

                      let objtrack = {
                          url: infor[k].url,
                          key: k,
                        
                        
                      }
                        this.arrayP.push(objtrack);

                       console.log(this.count);
                      }
                }
                else{
                  this.massage="no track uploaded";
                }
              
              
              //console.log("track" );
            }, (error) => {
      
              console.log(error.message);
            });

             //artist

              firebase.database().ref('artists/' + this.id).on('value', (data)=>{
                var inforArt = data.val();

                if( inforArt!=null && inforArt!="")
                {
                  var keys: any = Object.keys(inforArt);

                 // console.log(inforArt);
                
                  this.trackarray=[];
                  for (var i = 0; i < keys.length; i++) {
                    var k = keys[i];
            

                  let objart = {
                    artistName: inforArt[k].artistName,
                    trackName: inforArt[k].trackName,
                    
                    key: k,
                    count:this.count++
                    
                  }
       
                   this.artistName=objart.artistName;
                    this.trackarray.push(objart);

                  //  console.log(this.trackarray);
                  }
                }
                else{
                  this.massage="No Track uploaded yet"
                }
              });

/////
            let obj = {
              id:this.id,
              fullname: userDetails.fullname,
              email:userDetails.email,
              surname:userDetails.surname
            
           
            }

            this.fullname=obj.fullname;

           
          // console.log(obj);
          }
         
     
        })
       
 
 
      }
 
      
    });
  }


  edit()
  {

    const actionSheet = this.actionSheetCtrl.create({
      title: 'Modify your album',
      buttons: [
        {
          text: 'Edit Profile',
          role: 'Edit Profile',
          handler: () => {
            console.log('Edit Profile clicked');

            this.navCtrl.push(EditPage);
          }
        },{
          text: 'Upload Track',
          handler: () => {
            console.log('Upload Track clicked');
            this.navCtrl.push(UploadPage);
          }
        },{
          
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  // click(i)
  // {
  //   this.navCtrl.push('PlayerPage',{obj:i});
  // }
  back(){
    this.navCtrl.push(CatergoriesPage);
  }

  Booking()
  {

    console.log(this.condition);

    if(this.condition==true)
    {
      if(this.userid == this.key){
        const toast = this.toastCtrl.create({
          message: 'You cannot Request Booking for yourself',
          duration: 3000
        });
        toast.present();
        this.navCtrl.push(CatergoriesPage);


      }else{
        let djKey=this.key;
        this.navCtrl.push(BookingsPage,{objBooking:djKey});
      }
    }
    else if(this.condition==false)
    {
      let djKey=this.key;
      this.navCtrl.push(SigninPage,{objBooking:djKey});

    }
    
        
  

  }
}

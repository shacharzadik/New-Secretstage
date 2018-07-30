import { Component, OnInit, ViewChild, ChangeDetectorRef, ElementRef } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { Artist } from '../Models/artist';


@Component({
  selector: 'app-artist-dashboard-profile',
  templateUrl: './artist-dashboard-profile.component.html',
  styleUrls: ['./artist-dashboard-profile.component.css']
})
export class ArtistDashboardProfileComponent implements OnInit {

  @ViewChild('form') artistForm = NgForm;
  artist: Artist;
  coverImageUploaded : boolean;

  musicGender: string[] = ['Acoustic', 'Folk', 'Rock', 'Melodic', 'Indie', 'Pop', 'Alternative', 'Electronic', 'Instrumental', 'Country', 'Disco', 'Bluegrass', 'Hip-hop','CUSTOM'];

  constructor(private cd: ChangeDetectorRef) {
    this.artist = new Artist();
    this.coverImageUploaded = false;
    
   }

  ngOnInit() {

  }

  onFileChange(event) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {

      console.log(event.target.files)
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
       this.artist.artist_cover_photo = reader.result;
       this.coverImageUploaded = true;
      }
      console.log(this.artist.artist_cover_photo)

        // need to run CD since file load runs outside of zone
        this.cd.markForCheck();
      };
    
  }

  onSubmit() {

    alert("artist form submited");
  }

  onClicks(){
    alert("click")
  }

}

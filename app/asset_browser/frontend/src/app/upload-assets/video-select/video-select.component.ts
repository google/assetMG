import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialog,
} from '@angular/material/dialog';
import { YouTubeVid } from '../../model/yt-vid';
import { UploadAssetService } from '../../services/upload-asset.service';

@Component({
  selector: 'app-video-select',
  templateUrl: './video-select.component.html',
  styleUrls: ['./video-select.component.css']
})
export class VideoSelectComponent implements OnInit {
  videos: YouTubeVid[];
  form: FormGroup;
  mySelect: YouTubeVid[] = [];
  searchText;

  constructor(
    public dialogRef: MatDialogRef<any>,
    private _uploadAssetService: UploadAssetService,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: YouTubeVid[],
    ) { }

  ngOnInit(): void {
    this.mySelect = this.data;
    this.form = this.formBuilder.group({myOtherControl: new FormControl(this.mySelect)})
    this.dialogRef.updateSize('900px', '450px');
    this._uploadAssetService.ytVidList$.subscribe((vids)=>{
      this.videos=vids;
    })
    
  }
 
  submit(form){
    this.dialogRef.close(form.value.myOtherControl);
  }
}

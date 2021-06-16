/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { Component, OnInit, Output, EventEmitter,ViewChild, ChangeDetectorRef,} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfigService } from '../../services/config.service';
import { YouTubeVid } from '../../model/yt-vid'
import { VideoSelectComponent } from '../video-select/video-select.component';
import { UploadAssetService } from '../../services/upload-asset.service'
import { AssetService } from '../../services/asset.service'


@Component({
  selector: 'app-upload-video',
  templateUrl: './upload-video.component.html',
  styleUrls: ['./upload-video.component.css'],
})
export class UploadVideoComponent implements OnInit {
  selected: string;
  options: any[] = [
    {name:'single', display:'Single Video', disable:false},
    {name:'channel', display:'Choose From Channel', disable:false},
    // {name:'csv',display:'Upload CSV', disable:false}  
  ];
  option: string;
  chosenVids: YouTubeVid[] = [];


  form: FormGroup;
  @Output() isChildFormValid: EventEmitter<boolean> = new EventEmitter<
    boolean
  >();
  @Output() isBulkUpload: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() isBulkVidFilesSelected: EventEmitter<boolean> = new EventEmitter<boolean>();

  // Used for upload csv option
  // @ViewChild('fileInput')
  // fileInput;

  // file: File | null = null;

  // onClickFileInputButton(): void {
  //   this.fileInput.nativeElement.click();
  // }
  
  // onChangeFileInput(): void {
  //   const files: { [key: string]: File } = this.fileInput.nativeElement.files;
  //   this.file = files[0];
  // }
  
  constructor(
    private _formBuilder: FormBuilder,
    private _configService: ConfigService,
    private _uploadAssetService: UploadAssetService,
    private _assetService: AssetService,
    private _vidSelect: MatDialogRef<VideoSelectComponent>,
    private dialog: MatDialog,
    ) {}

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      videoNameCtrl: ['', [Validators.required]],
      videoUrlCtrl: ['', [Validators.required]],
    });

    // Update parent form when the value changes to detect valid and invalid states
    this.form.valueChanges.subscribe((value) => {
      if (this.form.get('videoUrlCtrl').value.length) {
        this.isChildFormValid.emit(!this.form.invalid);
      }
    });
    let yt_creds = this._configService.getYtConfigSettings();
    if (yt_creds.channel_id === ''){
      this.options[1].disable = true;
    }
  }

  openVidSelect(){
    this._vidSelect = this.dialog.open(VideoSelectComponent, {data:this.chosenVids});
    this._vidSelect.afterClosed().subscribe((vids)=>{
      // TODO: concat, not append
      if (vids != null){
        this.chosenVids = vids;
      }
      if (this.chosenVids.length > 0){
        this.isBulkVidFilesSelected.emit(true);
      }
      else{
        this.isBulkVidFilesSelected.emit(false);
      }
      // fix for if user goes back and then returns
      this.isBulkUpload.emit(true);
    })
  }

  emitIsBulkUpload(){
    if (this.selected === 'single' ){
      this.isBulkUpload.emit(false);
    }
    else{
      this.isBulkUpload.emit(true);
    }
  }

  uploadBulkVids(){
    var accountId;
    this._assetService.activeAccountId$.subscribe((id) =>{
      accountId = id;
    })
    var uploadList = []; 
    for (var item in this.chosenVids){
      uploadList.push({
        account:accountId,
        name:this.chosenVids[item]['name'],
        url:this.chosenVids[item]['url']
      })
    }
    return this._uploadAssetService.bulkUploadToYt(uploadList)
  }

  // Reflect valid/invalid state to parent - "empty space" is bypassed by the
  // event emitter previous
  onBackspace(event) {
    console.log(event);
    // This gets triggered before the actual text os deleted
    // so we want to emit it when there's one character in the textbox
    if (this.form.get('videoUrlCtrl').value.length == 1) {
      this.isChildFormValid.emit(false);
    }
  }
}

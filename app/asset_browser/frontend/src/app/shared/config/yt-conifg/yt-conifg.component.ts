import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { YouTubeSettings } from 'src/app/model/settings';

@Component({
  selector: 'app-yt-config',
  templateUrl: './yt-conifg.component.html',
  styleUrls: ['./yt-conifg.component.css'],
})

export class YtConifgComponent implements OnInit {
  YTform: FormGroup;
  api_url: string = 'https://developers.google.com/youtube/registering_an_application';
  console_url: string = 'https://developers.google.com/youtube/v3/getting-started#before-you-start';
  instructions: string = "To bulk upload videos from YouTube, please enable the YouTube Data API in the <a href=${this.console_url} target='_blank' rel='noopener noreferrer'>API console</a>. " + 
  "After API enabled, paste a YouTube channel ID in the field above and click the update button bellow. If you are an owner in this channel you will see both unlisted and public videos, else you will only see public videos."
  
  // "This is optional. " +
  //       "If you want to use the bulk upload from a YouTube channel feature, " +
  //       `please generate an <a href=${this.api_url} target='_blank' rel='noopener noreferrer'>API Key</a> ` +
  //       `(not Oauth2) and enable the YouTube Data API in the <a href=${this.console_url} target='_blank' rel='noopener noreferrer'>API console</a> `;

  constructor(private fb: FormBuilder) { }
 
  @Input() ytData: YouTubeSettings;

  ngOnInit(): void {
    let channel_id = this.ytData.channel_id ? this.ytData.channel_id : '';
    this.YTform = this.fb.group({
      channel: [
        channel_id,
      [
        Validators.required,
        Validators.minLength(3)
      ]],
    })
  }

}

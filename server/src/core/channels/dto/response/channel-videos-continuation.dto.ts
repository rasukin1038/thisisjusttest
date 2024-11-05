import { ChannelInfoResponseContinuation, Video } from '../../yt-channel-info/app/types';
import { ChannelVideoDto } from '../basic/channel-video.dto';

export class ChannelVideosContinuationDto implements ChannelInfoResponseContinuation<Video> {
  items?: ChannelVideoDto[];
  continuation?: string;
}

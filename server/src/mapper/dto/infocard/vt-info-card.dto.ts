import { VTPlaylistCardContentDto } from './vt-playlist-card-content.dto';
import { VTSimpleCardContentDto } from './vt-simple-card-content.dto';
import { VTVideoCardContentDto } from './vt-video-card-content.dto';

export class VTInfoCardDto {
  shortName: string;
  startMs: number;
  endMs: number;
  content: VTSimpleCardContentDto | VTVideoCardContentDto | VTPlaylistCardContentDto;
}

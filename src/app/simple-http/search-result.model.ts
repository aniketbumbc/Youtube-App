/**
 That holds individual records from youtube search
 AIzaSyBePMoiGScOx1_Hi7dQbZ7qhZQQ2_Z3pDg
 */
export class SearchResult{
    id:string;
    title:string;
    descriptions:string;
    thumbUrl:string;
    videoUrl:string;
    constructor(obj?:any){
        this.id=obj && obj.id || null;
        this.title=obj && obj.title || null;
        this.descriptions=obj && obj.descriptions|| null;
        this.thumbUrl=obj && obj.thumbUrl || null;
        this. videoUrl=obj && obj.videoUrl || `https://www.youtube.com/watch?v=${this.id}`;
    }
}
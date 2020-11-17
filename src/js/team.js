import { el, mount } from "redom";

import Video from './team/video';
import Member from './team/member';

class Team {
    constructor(navbar){
        this.navbar = navbar;
        this.video = null;
    }
    draw() {
        this.remove();
        this.container = el(".team");
        mount(document.body, this.container);

        this.video = new Video(this.container);
        this.video.draw();

        this.cristina = new Member(this.container, "cristina");
        this.cristina.draw();

        this.lucas = new Member(this.container, "lucas");
        this.lucas.draw();

        this.yue = new Member(this.container, "yue");
        this.yue.draw();
    }
    remove() {
        if (this.container) this.container.remove();
    }
}
export default Team;
import Welcome from "./Welcome"
import Excerpt from "./Excerpt"
import Morelinks from "./Morelinks"
import ExcerptLarge from './ExcerptLarge';
import ExcerptImgLarge from './ExcerptImgLarge';
const MainHome=()=> {
  return (
    <div id="main">
      <div className="container">
        <div className="row main-row">
<Welcome />
<Excerpt />
<Morelinks />
<ExcerptLarge />
<ExcerptImgLarge />
        </div>
      </div>
    </div>
  )
}
export default MainHome;
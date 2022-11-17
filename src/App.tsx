import {
  ScrollContainer,
  ScrollPage,
  Animator,
  Sticky,
  Zoom,
  batch,
  Fade,
  MoveOut,
  FadeIn,
  ZoomIn,
  StickyIn,
  Move,
  MoveIn
} from "react-scroll-motion";

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Sticky(), Move());

function App() {
  return (
    <ScrollContainer>
      <ScrollPage page={0}>
        <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -200))}>
          <h2>Mera Namm</h2>
        </Animator>
      </ScrollPage>

      <ScrollPage page={1}>
        <Animator animation={ZoomInScrollOut}>
          <h2>Prabhat Singh</h2>
        </Animator>
      </ScrollPage>

      <ScrollPage page={2}>
        <Animator animation={FadeUp}>
          <h2>Full Stack Web Developer</h2>
        </Animator>
      </ScrollPage>
      <ScrollPage page={3}>
        <div className="section-3">
          <h2 style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:"30px",minHeight:"100vh"}}>
            <Animator animation={MoveIn(-1000,0)}>
              True Fan of Lord Krishna 🙏🙏🙏
            </Animator>
            <Animator animation={MoveOut(-1000,0)}>
              True Fan of Lord Krishna 🙏🙏🙏
            </Animator>
            <Animator animation={MoveIn(1000,0)}>
              True Fan of Lord Krishna 🙏🙏🙏
            </Animator>
          </h2>
        </div>
      </ScrollPage>
      <ScrollPage page={4}>
        <Animator animation={batch(Fade(),Sticky())}>
          Thank You ✅😥✅
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  );
}

export default App;

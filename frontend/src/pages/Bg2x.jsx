const imgPattern = "https://www.figma.com/api/mcp/asset/7553f20a-c54a-4d8e-b6bc-370d1e0ab07a";

function Bg2x() {
  return (
    <section className="page-translation">
      <div className="pattern-bg" style={{ backgroundImage: `url(${imgPattern})` }} />
      <div className="bg2x-content">
        <p>Ссылка на оптимизированное изображение 2x</p>
        <a
          href="https://drive.google.com/file/d/1AFhCxGaBpYFXkTHD7_oicHYfqub-D9R5/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          https://drive.google.com/file/d/1AFhCxGaBpYFXkTHD7_oicHYfqub-D9R5/view?usp=sharing
        </a>
      </div>
    </section>
  );
}

export default Bg2x;

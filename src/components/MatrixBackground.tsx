export default function MatrixBackground(): JSX.Element {
  return (
    <div className="grid_box">
      <div className="grid">Do first</div>
      <div className="grid">Schedule</div>
      <div className="grid">Delegate</div>
      <div className="grid">
        Forget about it
        <ul id='forget_about_it'>
          <li></li>
        </ul>
      </div>
    </div>
  );
}

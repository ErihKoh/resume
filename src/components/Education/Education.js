import s from './Education.module.css';

function Education() {
  return (
    <>
      <p className={s.university}>University</p>
      <p className={s.education}>PPPPPPPP</p>
      <span className={s.time}>
        Septermber 2004 - March 2009
        <span className={s.divider}> |</span> Ukraine
      </span>
    </>
  );
}

export default Education;

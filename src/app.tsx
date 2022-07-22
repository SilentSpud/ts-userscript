import { css, classMap } from './style.module.css';
import VM from "@violentmonkey/dom";

export function getGreetings() {
  return (
    <>
      <div className={classMap.panel}>
        hello
      </div>
      <style>{css}</style>
    </>
  );
}

import {
  profileMainLoader,
  circularLoader,
  loaderPath,
  loader,
} from "../styles/spinningWheel.module.css";

export default function SpinningWheel() {
  return (
    <>
      <div id="wrapper">
        <div className={`${profileMainLoader}`}>
          <div className={`${loader}`}>
            <svg className={`${circularLoader}`} viewBox="25 25 50 50">
              <circle
                className={`${loaderPath}`}
                cx="50"
                cy="50"
                r="20"
                fill="none"
                stroke="#212121"
                strokeWidth="4"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default function NavbarShape({ className }) {
  return (
    <svg
      viewBox="0 0 375 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="none" // Allows stretching width-wise
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 20C0 8.95431 8.9543 0 20 0H128.5C136.06 0 142.923 4.31648 146.069 11.1046L149.263 18.0062C154.514 29.3512 168.966 34.6974 180.355 29.742L182.028 29.0139C195.429 23.1813 210.976 29.7296 216.711 43.1932L219.034 48.6475C222.18 56.0356 229.444 60.85 237.469 60.85H355C366.046 60.85 375 51.8957 375 40.85V90H0V20Z"
        fill="#0A0E10"
      />
    </svg>
  );
}

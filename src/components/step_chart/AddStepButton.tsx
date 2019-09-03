import React from 'react'

export default function AddStepButton(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="7" cy="7" r="7" fill="#EAEBEC" />
      <path
        d="M10.4286 6.42857H7.57143V3.57143C7.57143 3.25714 7.31429 3 7 3C6.68571 3 6.42857 3.25714 6.42857 3.57143V6.42857H3.57143C3.25714 6.42857 3 6.68571 3 7C3 7.31429 3.25714 7.57143 3.57143 7.57143H6.42857V10.4286C6.42857 10.7429 6.68571 11 7 11C7.31429 11 7.57143 10.7429 7.57143 10.4286V7.57143H10.4286C10.7429 7.57143 11 7.31429 11 7C11 6.68571 10.7429 6.42857 10.4286 6.42857Z"
        fill="#4E5156"
      />
    </svg>
  )
}

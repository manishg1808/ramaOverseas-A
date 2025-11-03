import React from 'react'
import styled from 'styled-components'

// Reusable section wrapper that renders the conic-gradient pattern as background
// and displays any children on top. Accepts optional Tailwind classes via className.
const Pattern = ({ className = '', children }) => {
  return <StyledSection className={className}>{children}</StyledSection>
}

const StyledSection = styled.section`
  position: relative;
  isolation: isolate;

  /* Pattern variables */
  --s: 82px;
  --c1: #b2b2b2;
  --c2: #ffffff;
  --c3: #d9d9d9;
  --_g: var(--c3) 0 120deg, #0000 0;

  /* Background pattern (fills entire section) */
  background: conic-gradient(from -60deg at 50% calc(100% / 3), var(--_g)),
    conic-gradient(from 120deg at 50% calc(200% / 3), var(--_g)),
    conic-gradient(
      from 60deg at calc(200% / 3),
      var(--c3) 60deg,
      var(--c2) 0 120deg,
      #0000 0
    ),
    conic-gradient(from 180deg at calc(100% / 3), var(--c1) 60deg, var(--_g)),
    linear-gradient(
      90deg,
      var(--c1) calc(100% / 6),
      var(--c2) 0 50%,
      var(--c1) 0 calc(500% / 6),
      var(--c2) 0
    );
  background-size: calc(1.732 * var(--s)) var(--s);
`

export default Pattern



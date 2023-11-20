import { Button as EmailButton } from "@react-email/button";
import { Html } from "@react-email/html";
import * as React from "react";
import styled from 'styled-components';

export function ThanksEmail() {
  return (
    <Html>
      <EmailButton
        href="/thank-you"
        style={{ background: "#000", color: "#fff" }}
      >
        Submit Request
      </EmailButton>
    </Html>
  );
}

const Button = styled.a<{ pX: number, pY: number }>`padding: ${props => `${props.pY}px ${props.pX}px`};`;
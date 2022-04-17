import React from "react";

type Props = {
  style?: React.CSSProperties;
};

export default function Footer({ style }: Props) {
  return <div style={{ ...style, paddingLeft: 240 }}>Footer</div>;
}

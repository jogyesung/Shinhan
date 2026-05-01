/* global React */
const { useState } = React;

// ============= Shared atoms =============

function Avatar({ initial = "김", color = "#b18a3a" }) {
  return (
    <div style={{
      width: 32, height: 32, borderRadius: 9999,
      background: color, color: "#fff",
      display: "flex", alignItems: "center", justifyContent: "center",
      fontWeight: 700, fontSize: 14, fontFamily: "var(--font-sans)"
    }}>{initial}</div>
  );
}

function HeaderBar({ name = "김신한님" }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "10px 18px 14px", background: "#fff"
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <Avatar />
        <div style={{ fontSize: 17, fontWeight: 700, color: "var(--fg1)" }}>{name}</div>
      </div>
      <div style={{ display: "flex", gap: 14, color: "var(--fg2)" }}>
        {["💬","📒","🔔","🔍"].map((_, i) => (
          <div key={i} style={{ width: 26, height: 26, borderRadius: 8, background: "#eef1f7" }}/>
        ))}
      </div>
    </div>
  );
}

function BottomNav({ active = "home", onChange }) {
  const tabs = [
    { id: "home", label: "홈" },
    { id: "money", label: "금융" },
    { id: "products", label: "상품" },
    { id: "rewards", label: "혜택" },
    { id: "stocks", label: "주식" },
  ];
  return (
    <div style={{
      display: "grid", gridTemplateColumns: "repeat(5,1fr)",
      background: "#fff", padding: "10px 4px 22px",
      borderTop: "1px solid var(--line)"
    }}>
      {tabs.map(t => {
        const isActive = active === t.id;
        return (
          <div key={t.id} onClick={() => onChange && onChange(t.id)} style={{
            display: "flex", flexDirection: "column", alignItems: "center", gap: 4,
            fontSize: 11, fontWeight: isActive ? 700 : 500,
            color: isActive ? "var(--shinhan-blue)" : "var(--fg3)",
            cursor: "pointer"
          }}>
            <div style={{
              width: 24, height: 24, borderRadius: 6,
              background: isActive ? "var(--shinhan-blue)" : "var(--bg3)"
            }}/>
            {t.label}
          </div>
        );
      })}
    </div>
  );
}

function Card({ children, style }) {
  return (
    <div style={{
      background: "#fff", borderRadius: 18,
      padding: "16px 18px", boxShadow: "0 1px 2px rgba(15,20,38,.04)",
      ...style
    }}>{children}</div>
  );
}

function Button({ children, variant = "primary", onClick, style }) {
  const base = {
    fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 15,
    padding: "13px 20px", borderRadius: 9999, border: "none", cursor: "pointer",
    flex: 1
  };
  const variants = {
    primary: { background: "var(--grad-shinhan)", color: "#fff", boxShadow: "var(--shadow-blue)" },
    ghost: { background: "#eef1f7", color: "var(--fg1)" },
  };
  return <button onClick={onClick} style={{ ...base, ...variants[variant], ...style }}>{children}</button>;
}

function Nudge({ children, action, onAction }) {
  return (
    <Card style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, padding: "14px 16px" }}>
      <div style={{ fontSize: 13, color: "var(--fg2)", lineHeight: 1.45 }}>{children}</div>
      <button onClick={onAction} style={{
        flexShrink: 0, fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 12,
        padding: "8px 14px", borderRadius: 9999, border: "none", cursor: "pointer",
        background: "var(--shinhan-blue)", color: "#fff"
      }}>{action}</button>
    </Card>
  );
}

function MoneyRow({ logo, logoColor, name, sub, value, action }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 0" }}>
      <div style={{
        width: 40, height: 40, borderRadius: 9999, background: logoColor,
        color: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
        fontWeight: 700, fontSize: 14
      }}>{logo}</div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 14, fontWeight: 500, color: "var(--fg1)" }}>{name}</div>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 16, fontWeight: 700, color: "var(--fg1)", marginTop: 2 }}>{value}</div>
        {sub && <div style={{ fontSize: 11, color: "var(--fg3)", marginTop: 2 }}>{sub}</div>}
      </div>
      {action && (
        <button style={{
          padding: "8px 14px", borderRadius: 9999, border: "none",
          background: "#eef1f7", color: "var(--fg1)",
          fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 12, cursor: "pointer"
        }}>{action}</button>
      )}
    </div>
  );
}

function StockRow({ logo, logoColor, name, sub, value, change, isUp = true }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 0" }}>
      <div style={{
        width: 36, height: 36, borderRadius: 9999, background: logoColor,
        color: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
        fontWeight: 700, fontSize: 12
      }}>{logo}</div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 14, fontWeight: 500, color: "var(--fg1)" }}>{name}</div>
        <div style={{ fontSize: 11, color: "var(--fg3)", marginTop: 2 }}>{sub}</div>
      </div>
      <div style={{ textAlign: "right" }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 15, fontWeight: 700, color: "var(--fg1)" }}>{value}</div>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 700, color: isUp ? "var(--positive)" : "var(--negative)", marginTop: 2 }}>
          {change}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Avatar, HeaderBar, BottomNav, Card, Button, Nudge, MoneyRow, StockRow });

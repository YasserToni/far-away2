export function Items({ Obj, onDeleteItems, onToggleItems }) {
  return (
    <li>
      <input
        type="checkbox"
        value={Obj.packed}
        onChange={() => onToggleItems(Obj.id)}
      />
      <span style={Obj.packed ? { textDecoration: "line-through" } : {}}>
        {Obj.quantity} {Obj.description}
      </span>
      <button onClick={() => onDeleteItems(Obj.id)}>❌</button>
    </li>
  );
}

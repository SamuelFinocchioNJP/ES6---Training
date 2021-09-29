// Rimpiazza i caratteri < > " & rispettivamente con &lt; &gt; &quot; &amp;"
function htmlspecialchars(formData) {
  const charMap = {
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "&": "&amp;",
  };

  return [...formData].map((_) => charMap[_] ?? _).join('');
}

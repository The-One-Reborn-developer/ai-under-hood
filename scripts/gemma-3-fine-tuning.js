const code = document.getElementById('code-snippet');
const lines = code.textContent.split('\n');

const indent = lines.reduce((min, line) => {
    if (line.trim() === '') return min;
    const match = line.match(/^(\s+)/);
    return match ? Math.min(min, match[1].length) : min;
}, Infinity);

code.textContent = lines.map(line => line.slice(indent)).join('\n');

function copyCode() {
  const code = document.getElementById('code-snippet').textContent;
  navigator.clipboard.writeText(code).then(() => {
    alert('Code copied!');
  });
}
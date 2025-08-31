async function fetchJSON(url) {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Error ${res.status}`);
    return res.json();
  }
  
  (async () => {
    try {
      const hello = await fetchJSON("/api/hello");
      document.getElementById("hello").textContent = JSON.stringify(hello, null, 2);
    } catch (e) {
      document.getElementById("hello").textContent = e.message;
    }
  
    try {
      const time = await fetchJSON("/api/time?tz=America/Lima");
      document.getElementById("time").textContent = JSON.stringify(time, null, 2);
    } catch (e) {
      document.getElementById("time").textContent = e.message;
    }
  })();
  
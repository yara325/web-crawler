import { useState } from "react";
import { Link } from "react-router-dom";

const UrlList = () => {
  const [url, setUrl] = useState("");
  const [urlList, setUrlList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidUrl(url)) {
      alert("Please enter a valid URL.");
      return;
    }

    setUrlList([
      ...urlList,
      { url, status: "stopped" }, // status can be "started" or "stopped"
    ]);
    setUrl("");
  };

  const isValidUrl = (str) => {
    try {
      new URL(str);
      return true;
    } catch {
      return false;
    }
  };

  const handleStart = (index) => {
    const updated = [...urlList];
    updated[index].status = "started";
    setUrlList(updated);
  };

  const handleStop = (index) => {
    const updated = [...urlList];
    updated[index].status = "stopped";
    setUrlList(updated);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "700px", margin: "auto" }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={url}
          placeholder="Enter a URL"
          onChange={(e) => setUrl(e.target.value)}
          style={{ width: "65%", padding: "8px" }}
        />
        <button type="submit" style={{ padding: "8px 16px", marginLeft: "8px" }}>
          Add
        </button>
      </form>

      {urlList.length > 0 && (
        <table
          style={{
            marginTop: "20px",
            width: "100%",
            borderCollapse: "collapse",
            textAlign: "left",
          }}>
          <thead>
            <tr>
              <th style={{ borderBottom: "1px solid #ccc", padding: "8px" }}>URL</th>
              <th style={{ borderBottom: "1px solid #ccc", padding: "8px" }}>Status</th>
              <th style={{ borderBottom: "1px solid #ccc", padding: "8px" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {urlList.map((item, index) => (
              <tr key={index}>
                <td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>
                 <Link to={`/details/${encodeURIComponent(item.url)}`}>{item.url}</Link>
                </td>
                <td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>
                  {item.status}
                </td>
                <td style={{ padding: "8px", borderBottom: "1px solid #eee" }}>
                  <button
                    onClick={() => handleStart(index)}
                    style={{
                      marginRight: "8px",
                      backgroundColor: "#4caf50",
                      color: "white",
                      padding: "6px 12px",
                      border: "none",
                      cursor: "pointer",
                    }}>
                    Start
                  </button>
                  <button
                    onClick={() => handleStop(index)}
                    style={{
                      backgroundColor: "#f44336",
                      color: "white",
                      padding: "6px 12px",
                      border: "none",
                      cursor: "pointer",
                    }}>
                    Stop
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UrlList;

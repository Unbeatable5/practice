const data = [];
for (let i = 1; i <= 20; i++) {
  data.push({
    id: 568423500 + i,
    desc: ["Water problem","Road problem","Electric problem"][i%3],
    status: ["Pending","Solved","Delayed"][i%3],
    area: ["Central ward","East ward","West ward"][i%3],
    date: "2 Dec 2025",
    priority: ["Low","Medium","High"][i%3]
  });
}

const tbody = document.getElementById("complaintTable");

data.forEach((d, i) => {
  tbody.innerHTML += `
    <tr>
      <td><input type="checkbox"></td>
      <td>${i + 1}</td>
      <td>${d.id}</td>
      <td>${d.desc}</td>
      <td><span class="status ${d.status.toLowerCase()}">${d.status}</span></td>
      <td>${d.area}</td>
      <td>${d.date}</td>
      <td>${d.priority}</td>
    </tr>`;
});

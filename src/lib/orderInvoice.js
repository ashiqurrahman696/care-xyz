export const orderInvoiceTemplate = ({ orderId, item }) => {
  return `
    <div style="font-family:arial; padding: 20px;">
      <h2>🧾 Order Invoice</h2>
      <p>Order ID: <strong>${orderId}</strong></p>
      <img src="https://i.ibb.co.com/gH8JNhf/logo.png" width="200px"/>
      
      <table width="100%" border="1" cellspacing="0" cellpadding="8">
        <thead>
          <tr>
            <th>Service</th>
            <th>Duration</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr>
              <td>${item.service_name}</td>
              <td>${item.duration}</td>
              <td align="right">${item.cost}</td>
            </tr>
        </tbody>
      </table>

      <p>Thank you ❤️</p>
    </div>
  `;
};

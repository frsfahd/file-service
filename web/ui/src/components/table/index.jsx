import axios from 'axios';

const Table = ({ files, isLoading }) => {
  const download = async (fileName) => {
    try {
      // Set responseType to 'blob' to handle file data
      const response = await axios.get(`files/${fileName}`, {
        responseType: 'blob',
      });

      // Create a URL for the blob
      const blob = new Blob([response.data]);
      const url = window.URL.createObjectURL(blob);

      // Option 1: Download the file
      // const link = document.createElement('a');
      // link.href = url;
      // link.download = fileName; // Set suggested filename
      // document.body.appendChild(link);
      // link.click();
      // link.remove();

      // Option 2: Open in new tab
      window.open(url, '_blank');

      // Clean up the blob URL
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="overflow-x-auto max-h-screen my-7">
      <table className="table table-sm table-pin-rows">
        <thead>
          <tr>
            <th></th>
            <td>File Name</td>
            <td>Size</td>
            <td>Date Upload</td>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {files.map((v, i) => {
            return (
              <tr>
                <th>{i + 1}</th>
                <td>{v.fileName}</td>
                <td>{v.size > 1000000 ? `${Math.round((v.size / 1000000) * 100) / 100}Mb` : `${Math.round((v.size / 1000) * 100) / 100}Kb`}</td>

                <td>12/16/2020</td>
                <th>
                  <th>
                    <button className="btn btn-ghost btn-xs" onClick={() => download(v.fileName)}>
                      download
                    </button>
                  </th>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

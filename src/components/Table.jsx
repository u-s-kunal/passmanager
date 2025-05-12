import { ToastContainer, toast } from "react-toastify";

function Table(props) {
  const copyHandler = (text) => {
    navigator.clipboard.writeText(text);
    toast(" Copied successfully");
  };

  return (
    <div className=" relative top-106  max-h-90 overflow-y-auto">
      <ToastContainer position="top-right" autoClose={3000} />
      <table className="  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 table-auto w-full">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 sticky top-0 z-8">
          <tr>
            <th scope="col" className="px-6 py-3">
              Site Name
            </th>
            <th scope="col" className="px-6 py-3">
              User Name
            </th>
            <th scope="col" className="px-6 py-3">
              Password
            </th>
            <th scope="col" className="px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="">
          {props.passwordArray.map((item, index) => {
            return (
              <tr
                className="  bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 "
                key={index}
              >
                <td
                  scope="row"
                  className=" flex  gap-6  px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <img
                    src="/public/icons8-copy.gif"
                    className="invert w-6 cursor-pointer"
                    onClick={() => {
                      copyHandler(item.site);
                    }}
                  />
                  <a href={item.site} target="_blank">
                    {item.site}
                  </a>
                </td>
                <td className="  px-6 py-4">
                  <div className="flex gap-6">
                    <img
                      src="/public/icons8-copy.gif"
                      className="invert w-6 cursor-pointer"
                      onClick={() => {
                        copyHandler(item.user);
                      }}
                    />
                    <span>{item.user}</span>
                  </div>
                </td>
                <td className="flex gap-6 px-6 py-4">
                  <img
                    src="/public/icons8-copy.gif"
                    className="invert w-6 cursor-pointer"
                    onClick={() => {
                      copyHandler(item.password);
                    }}
                  />
                  <span>{"*".repeat(item.password.length)}</span>
                </td>
                <td className="  px-6 py-4">
                  <div className="flex gap-6">
                    <span>
                      <img
                        src="/public/icons8-edit.gif"
                        className="invert rounded-full "
                        onClick={() => {
                          props.editHandler(index);
                        }}
                      />
                    </span>
                    <span>
                      <img
                        className="invert rounded-full "
                        src="/public/icons8-delete.gif"
                        onClick={() => {
                          props.deleteHandler(index);
                        }}
                      />
                    </span>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;

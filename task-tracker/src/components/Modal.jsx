const Modal = ({
  onClose,
  addTask,
  descriptionRef,
  titleRef,
  editTask,
  isEditing,
}) => {
  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      {/* Darken Background  */}
      <div
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      ></div>

      {/* Main Content */}
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white flex flex-col px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <h2 className="text-xl font-semibold mb-7">ADD TASK</h2>
              <label className="mb-2" htmlFor="title">
                Project Name
              </label>
              <input
                className="bg-stone-200 w-full p-2 rounded-md mb-3"
                placeholder="Enter Name"
                type="text"
                name="title"
                id="title"
                ref={titleRef}
              />

              <label className="mb-2" htmlFor="description">
                Project Description
              </label>
              <textarea
                className="bg-stone-200 w-full p-2 rounded-md mb-3"
                placeholder="Enter Name"
                type="text-area"
                name="description"
                id="description"
                ref={descriptionRef}
              />
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                onClick={onClose}
                type="button"
                className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
              >
                Cancel
              </button>

              <button
                onClick={isEditing ? () => editTask(titleRef) : addTask}
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

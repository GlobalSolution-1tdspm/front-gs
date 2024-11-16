export default function Carregando() {
    return (
      <div className="flex justify-center items-center min-h-screen bg-opacity-50 bg-gray-800 absolute inset-0 z-50">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-t-4 border-green-600 border-solid rounded-full animate-spin"></div>
          <p className="text-white mt-4 text-2xl font-semibold">Carregando...</p>
        </div>
      </div>
    );
  }
  
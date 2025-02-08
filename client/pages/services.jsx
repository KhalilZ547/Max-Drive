export default function Services() {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold text-gray-800">Our Services</h1>
        <div className="mt-4">
          <h2 className="text-xl font-semibold text-gray-700">Mechanical Services</h2>
          <p className="text-gray-600">Engine repairs, oil changes, brake services, and more.</p>
          
          <h2 className="text-xl font-semibold text-gray-700 mt-4">Electrical Services</h2>
          <p className="text-gray-600">Wiring, diagnostics, battery replacement, and more.</p>
          
          <h2 className="text-xl font-semibold text-gray-700 mt-4">Tuning Services</h2>
          <p className="text-gray-600">ECU tuning, performance upgrades, and more.</p>
        </div>
      </div>
    );
  }
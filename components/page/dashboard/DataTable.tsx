const fakeData = [
    { company: "Louis Vuitton", userId: "20010510", type: "Customer", industry: "Accessories" },
    { company: "Apple", userId: "20010511", type: "Partner", industry: "Electronics" },
    { company: "Johnson", userId: "20010512", type: "Customer", industry: "Telecommunications" },
    { company: "Starbucks", userId: "20010513", type: "Reseller", industry: "Retail" }
];

export function DataTable() {
    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto">
                <div className="min-w-full inline-block align-middle">
                    <div className="overflow-hidden border rounded-lg border-gray-300">
                        <table className="min-w-full rounded-xl">
                            <thead>
                                <tr className="bg-gray-50">
                                    <th scope="col" className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize">Company</th>
                                    <th scope="col" className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize">User ID</th>
                                    <th scope="col" className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize">Type</th>
                                    <th scope="col" className="p-5 text-left text-sm leading-6 font-semibold text-gray-900 capitalize">Industry Type</th>
                                </tr>
                            </thead>
                            <tbody>
                                {fakeData.map((data, index) => (
                                    <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                                        <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">{data.company}</td>
                                        <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">{data.userId}</td>
                                        <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">{data.type}</td>
                                        <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">{data.industry}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

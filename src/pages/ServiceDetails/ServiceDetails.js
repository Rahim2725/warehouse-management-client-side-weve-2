import { useQuery } from 'react-query';
import Loading from '../../components/Loading';
const ServiceDetails = () => {

    const { data: phones, isLoading, refetch } = useQuery('service', () =>
        fetch('http://localhost:5000/service')
            .then(res => res.json())
    );

    if (isLoading) {
        return <Loading></Loading>
    }
    const deletePhone = id => {
        console.log(id);
        fetch(`http://localhost:5000/service/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json)
            .then(data => {
                refetch();
            })
    }

    return (
        <div className='max-w-full mx-10'>
            <h1 className='text-3xl text-center mb-10 text-primary'>Latest Official Phones Details</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Supplier Name</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            phones.map((phone, index) =>
                                <tr
                                    key={index}>
                                    <th>{index + 1}</th>
                                    <td>{phone.name}</td>
                                    <td> <img className='w-20 h-20' src={phone.img} alt="" /></td>
                                    <td>৳{phone.price}</td>
                                    <td>{phone.supplier_name}</td>
                                    <td className='cursor-pointer' onClick={() => deletePhone(phone._id)}>X</td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ServiceDetails;
import { PrismaClient } from "@prisma/client";
import AddBisnis from "./addBisnis";
import DeleteBisnis from "./deleteBisnis";
import UpdateBisnis from "./updateBisnis";

const prisma = new PrismaClient();

const getBisniss = async () => {
    const res = await prisma.bisnis.findMany({
        select : {
            id : true,
            nameUMKM : true,
            owner : true,
            description : true,
            address : true,
            category : true,
            openAt : true,
            closeAt : true,
            destinasiId : true,
            destinasi : true,
        },
    });
    return res;
};

const getDestinasis = async () => {
    const res = await prisma.destinasi.findMany();
    return res;
}

const Bisnis = async () => {
    const [bisniss, destinasis] = await Promise.all([
        getBisniss(),
        getDestinasis()
    ]);

    return (
    <div>
        <div className="mb-2">
            <AddBisnis destinasis={destinasis}/>
        </div>
        <table className=" table w-full">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nama UMKM</th>
                    <th>Owner</th>
                    <th>Alamat</th>
                    <th>Kategori</th>
                    <th>Jam Buka</th>
                    <th>Jam Tutup</th>
                    <th>Destinasi</th>
                    <th className="text-center">Action</th>
                </tr>
            </thead>
            <tbody>
            {bisniss.map((bisnis, index) => (
                <tr key = { bisnis.id }>
                    <td> { index + 1 } </td>
                    <td> { bisnis.nameUMKM } </td>
                    <td> { bisnis.owner } </td>
                    <td> { bisnis.address } </td>
                    <td> { bisnis.category } </td>
                    <td> { bisnis.openAt } </td>
                    <td> { bisnis.closeAt } </td>
                    <td> { bisnis.destinasi.nameWisata }</td>
                    <td className="flex justify-center space-x-1">
                        <UpdateBisnis destinasis={destinasis} bisnis={bisnis}/>
                        <DeleteBisnis bisnis={bisnis}/>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
  )
}

export default Bisnis
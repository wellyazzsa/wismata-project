"use client";
import { useState, SyntheticEvent } from "react";
import type { Destinasi } from "@prisma/client";
import { useRouter } from "next/navigation";
import axios from "axios";

type Bisnis = {
    id: number;
    nameUMKM: string;
    owner: string;
    description: string;
    address: string;
    category: string;
    openAt: string;
    closeAt: string;
    destinasiId: number;
};

const UpdateBisnis = ({
    destinasis, 
    bisnis, 
    }: {
    destinasis : Destinasi[];
    bisnis: Bisnis
    }) => {
        const [nameUMKM, setNameUMKM] = useState(bisnis.nameUMKM);
        const [owner, setOwner] = useState(bisnis.owner);
        const [description, setDescription] = useState(bisnis.description);
        const [address, setAddress] = useState(bisnis.address); 
        const [category, setCategory] = useState(bisnis.category); 
        const [openAt, setOpenAt] = useState(bisnis.openAt); 
        const [closeAt, setCloseAt] = useState(bisnis.closeAt); 
        const [destinasi, setDestinasi] = useState(bisnis.destinasiId); 

    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const handleUpdate = async (e: SyntheticEvent) => {
        e.preventDefault();
        await axios.patch(`/api/bisnis/${bisnis.id}`, {
            nameUMKM: nameUMKM,
            owner: owner,
            description: description,
            address: address,
            category: category,
            openAt: openAt,
            closeAt: closeAt,
            destinasiId: Number(destinasi)
        })
        router.refresh();
        setIsOpen(false);
    }

    const handleModal = () => {
        setIsOpen(!isOpen);
    }

    return (
    <div>
        <button className="btn btn-info btn-sm" onClick={handleModal}>
            Edit
        </button>

        <div className={isOpen ? 'modal modal-open' : 'modal'}>
            <div className="modal-box">
                <h3 className="font-bold text-lg">Update UMKM</h3>
                <form onSubmit={handleUpdate}>
                <div className="form-control w-full">
                        <label className="label font-bold">Nama UMKM</label>
                        <input 
                        type="text"
                        value={nameUMKM}
                        onChange={(e) => setNameUMKM(e.target.value)}
                        className="input input-bordered" 
                        placeholder="Nama UMKM"/>
                    </div>
                    <div className="form-control w-full">
                        <label className="label font-bold">Nama Pemilik</label>
                        <input 
                        type="text" 
                        value={owner}
                        onChange={(e) => setOwner(e.target.value)}
                        className="input input-bordered" 
                        placeholder="Nama Pemilik"/>
                    </div>
                    <div className="form-control w-full">
                        <label className="label font-bold">Deskripsi</label>
                        <input 
                        type="text" 
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="input input-bordered" 
                        placeholder="Deskripsi"/>
                    </div>
                    <div className="form-control w-full">
                        <label className="label font-bold">Alamat</label>
                        <input 
                        type="text" 
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="input input-bordered" 
                        placeholder="Alamat"/>
                    </div>
                    <div className="form-control w-full">
                        <label className="label font-bold">Kategori</label>
                        <input 
                        type="text" 
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="input input-bordered" 
                        placeholder="Kategori UMKM"/>
                    </div>
                    <div className="form-control w-full">
                        <label className="label font-bold">Jam Buka</label>
                        <input 
                        type="text" 
                        value={openAt}
                        onChange={(e) => setOpenAt(e.target.value)}
                        className="input input-bordered" 
                        placeholder="Jam Buka"/>
                    </div>
                    <div className="form-control w-full">
                        <label className="label font-bold">Jam Tutup</label>
                        <input 
                        type="text" 
                        value={closeAt}
                        onChange={(e) => setCloseAt(e.target.value)}
                        className="input input-bordered" 
                        placeholder="Jam Tutup"/>
                    </div>
                    <div className="form-control w-full">
                        <label className="label font-bold">Objek Wisata Terdekat</label>
                        <select 
                        value={destinasi}
                        onChange={(e) => setDestinasi(Number(e.target.value))}
                        className="select select-bordered">
                        <option value="" disabled>Pilih Objek Wisata Terdekat</option>
                        {destinasis.map((destinasi) => (
                            <option value={destinasi.id} key={destinasi.id}>{destinasi.nameWisata}</option>
                        ))}
                        </select>
                    </div>
                    <div className="modal-action">
                        <button type="button" className="btn" onClick={handleModal}>
                            Close
                        </button>
                        <button type="submit" className="btn btn-primary">
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default UpdateBisnis
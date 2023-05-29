"use client";
import { useState, SyntheticEvent } from "react";
import type { Destinasi } from "@prisma/client";
import { useRouter } from "next/navigation";
import axios from "axios";

const AddContent = ({destinasis}: {destinasis : Destinasi[]}) => {
    const [nameUMKM, setNameUMKM] = useState("");
    const [owner, setOwner] = useState("");
    const [description, setDescription] = useState("");
    const [address, setAddress] = useState(""); 
    const [category, setCategory] = useState(""); 
    const [openAt, setOpenAt] = useState(""); 
    const [closeAt, setCloseAt] = useState(""); 
    const [destinasi, setDestinasi] = useState(""); 

    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        await axios.post('/api/bisnis', {
            nameUMKM: nameUMKM,
            owner: owner,
            description: description,
            address: address,
            category: category,
            openAt: openAt,
            closeAt: closeAt,
            destinasiId: Number(destinasi)
        })
        setNameUMKM("");
        setOwner("");
        setDescription("");
        setAddress("");
        setCategory("");
        setOpenAt("");
        setCloseAt("");
        setDestinasi("");
        router.refresh();
        setIsOpen(false);
    }

    const handleModal = () => {
        setIsOpen(!isOpen);
    }

    return (
    <div>
        <button className="btn" onClick={handleModal}>Tambah UMKM Baru</button>

        <div className={isOpen ? 'modal modal-open' : 'modal'}>
            <div className="modal-box">
                <h3 className="font-bold text-lg">Tambahkan UMKM Baru</h3>
                <form onSubmit={handleSubmit}>
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
                        onChange={(e) => setDestinasi(e.target.value)}
                        className="select select-bordered">
                        <option value="" disabled>Pilih Objek Wisata Terdekat</option>
                        {destinasis.map((destinasi) => (
                            <option value={destinasi.id} key={destinasi.id}>{destinasi.nameWisata}</option>
                        ))}
                        </select>
                    </div>
                    <div className="modal-action">
                        <button type="button" className="btn" onClick={handleModal}>Close</button>
                        <button type="submit" className="btn btn-primary">Save</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AddContent
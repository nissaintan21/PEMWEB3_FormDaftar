interface ProductCardProps {
    foto:string;
    nama:string;
    deskripsi:string;
    harga:number;
}
const ProductCard: React.FC<ProductCardProps> = ({foto, nama, deskripsi, harga}) => {
    return(
        <div>
            <img src={foto} alt={nama}/>
            <h3>{nama}</h3>
            <p>{deskripsi}</p>
            <p>{harga}</p>
        </div>
    );
};
export default ProductCard;
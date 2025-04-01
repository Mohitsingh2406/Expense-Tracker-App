import { ResponseType, WalletType } from "@/types";
import { uploadImageToCloudinary } from "./imageServices";
import { collection, doc, setDoc } from "firebase/firestore";
import { firestore } from "@/config/firebase";

export const createOrUpdateWallet = async (
    walletData: Partial<WalletType>
): Promise<ResponseType> => {
    try {
        let walletToSave = { ...walletData }

        if (walletData.image) {
            const imageUploadRes = await uploadImageToCloudinary(
                walletData.image,
                "wallets"
            )
            if (!imageUploadRes.success) {
                return {
                    success: false,
                    msg: imageUploadRes.msg || 'Failed to upload wallet icon'
                }
            }
            walletToSave.image = imageUploadRes.data
        }
        if(!walletData?.id){
            walletToSave.amount=0;
            walletToSave.totalExpenses=0;
            walletToSave.totalIncome=0;
            walletToSave.created= new Date()
        }

        const walletRef = walletData?.id
        ? doc(firestore, 'wallets',walletData?.id)
        : doc(collection(firestore,'wallets'))

        await setDoc(walletRef,walletToSave,{merge:true})
        return{success:true,data:{...walletToSave,id:walletRef.id}}
    } catch (error: any) {
        console.log('error creating or updating wallet: ', error)
        return { success: false, msg: error.message }
    }
}
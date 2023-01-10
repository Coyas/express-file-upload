const uploadFile = async (request, response) => {
    
    return response.status(201).json({message: "tudo pronto para uploads"});
};

module.exports = {
    uploadFile,
};
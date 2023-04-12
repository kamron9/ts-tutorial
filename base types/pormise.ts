enum QusetionStatus  {
    Published = 'published',
    Draft = 'draft',
    Deleted = 'deleted'
}

async function getFaqs(req:{topicId:number,status:QusetionStatus}):Promise<
    {
    questions:string;
    answer:string;
    like:number;
    tags:string[];
    }[]
>{
    const res =  await fetch('/faqs',{
        method:'POST',
        body:JSON.stringify(req)
    })
    const data = await res.json()
    return data
}
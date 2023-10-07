import { IAnimal } from '@/DTOs/IAnimal';
import { ModeToggle } from '@/components/mode-togle';
import { Search } from '@/components/search';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { api } from '@/lib/api';
import { randomUUID } from 'crypto';

export default async function Animals({ params }: { params: { slug: string } }) {
  const animals = (await api.get(`animals?name=${params.slug}`)).data as IAnimal[];
  const slugToLowerCase = params.slug.toLowerCase();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-12">
      <div className='flex-1 flex w-full gap-4 justify-center items-center'><Search /><ModeToggle /></div>
      <div className='flex-1 flex flex-wrap gap-4 justify-center'>
        {
          slugToLowerCase === 'cravinho'
            ?
            <Card>
              <CardHeader>
                <CardTitle>Pamela</CardTitle>
                <p>Cravinho mais lindo do mundo! 😘</p>
              </CardHeader>
            </Card>
            : animals.length === 0 
              ? <p>Animals Not Found!</p> 
              : animals.map(animal => {
              const { characteristics, taxonomy } = animal;
              const taxonomyKeys = Object.keys(taxonomy);
              const characteristicsKeys = Object.keys(characteristics);

              return (
                <Card className='w-full sm:w-1/2 md:w-1/3'>
                  <CardHeader>
                    <CardTitle>{animal.name}</CardTitle>
                  </CardHeader>
                  <CardContent className='flex flex-col gap-2'>
                    <details>
                      <summary>Taxonomy</summary>
                      {
                        taxonomyKeys.map(taxonomyKey => {
                          return (<p key={randomUUID()}>{taxonomyKey}: {taxonomy[taxonomyKey]}</p>)
                        })
                      }
                    </details>
                    <Separator />
                    <details>
                      <summary>
                        Characteristics
                      </summary>
                      {
                        characteristicsKeys.map((characteristicsKey) => {
                          return (<p key={randomUUID()}>{characteristicsKey}: {characteristics[characteristicsKey]}</p>)
                        })
                      }
                    </details>
                  </CardContent>
                  <CardFooter>
                    <details>
                      <summary>Locations</summary>
                      {
                        animal.locations.map(location => <p key={randomUUID()}>{location}</p>)
                      }
                    </details>
                  </CardFooter>
                  <Button variant='link'><a target='_blank' href={`https://en.wikipedia.org/wiki/${animal.name}`} >Info</a></Button>
                  <Button variant='link'><a target='_blank' href={`https://www.google.com/search?q=${animal.name}&sca_esv=571321355&tbm=isch&sxsrf=AM9HkKnjPJq4KF9siZxrlvI-f3qIwEb2vw:1696601581756&source=lnms&sa=X&ved=2ahUKEwj4kuy0zeGBAxWDpZUCHVS_BhsQ_AUoAXoECAUQAw&biw=1024&bih=651&dpr=1`}>Images</a></Button>
                </Card>
              )
            })
        }
      </div>
    </main>
  )
}

#include <stdio.h>
#include <stdlib.h>

main()
{
	int i=0;
	while(1)
	{
		printf("%d,%d,%d,\n",i%300,(i+100)%300,(i+200)%300);
		i++;
		if(i==300) i=0;
		sleep(1);
	}
}
	

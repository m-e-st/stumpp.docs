---
title: Glacier Vaults löschen
description: Löschen von Vaults in Amazon AWS Glacier
color: pink
date: '2022-04-04'
tags:
  - aws
  - glacier
---
Das Löschen eines großen AWS-Glacier-Archivs mit der AWS CLI ist eine mühsame Angelegenheit.
Für jede Datei muss einzeln die ID ermittelt werden und ein Löschbefehl abgesetzt werden.
Nachfolgendes Script macht da das Leben etwas leichter.

## Quelle 

[AWS Doku Glacier Delete Vault](https://docs.aws.amazon.com/amazonglacier/latest/dev/deleting-vaults-cli.html#Creating-Vaults-CLI-Setup)


## AWS CLI Kommandos

```js
    accountid 999999999999
    
    Server jobid     ADU1FNTeTqF2x55BrkuZvPucRfs0EHYqbJCGfpm7UwcS631-pP1Ew44Qc7Gd7nlT5dmBJ3MWbMn1MRR_14dX_6NWXy5J
    Personal jobid   A-4lyhjqgiZjra_k6aifd7GZTWLZmWiQaEbLAZNRyV-E42xChbWlGCVB7puvZgxEK6R5hhzVuveAr-r55hf0OBmvBYuD
    Mediafiles jobid AXG9He9_pzlGqrpCRCcU9Yi2xy6RGP3I26AkMrbaF7hsmOso9RyJNM1Gxn2mXhiDEipOHSaOsAaCntTLjPrftc759VKC
    
    aws glacier initiate-job --vault-name NAS-Server --account-id 999999999999 --job-parameters '{"Type": "inventory-retrieval"}'
    aws glacier describe-job --vault-name NAS-Server --account-id 999999999999 --job-id ADU1FNTeTqF2x55BrkuZvPucRfs0EHYqbJCGfpm7UwcS631-pP1Ew44Qc7Gd7nlT5dmBJ3MWbMn1MRR_14dX_6NWXy5J
    aws glacier get-job-output --vault-name NAS-Server --account-id 999999999999 --job-id ADU1FNTeTqF2x55BrkuZvPucRfs0EHYqbJCGfpm7UwcS631-pP1Ew44Qc7Gd7nlT5dmBJ3MWbMn1MRR_14dX_6NWXy5J output.json
    aws glacier delete-archive --vault-name NAS-Server --account-id 999999999999 --archive-id="*** archiveid ***"
    
    aws glacier initiate-job --vault-name NAS-Personal --account-id 999999999999 --job-parameters '{"Type": "inventory-retrieval"}'
    aws glacier describe-job --vault-name NAS-Personal --account-id 999999999999 --job-id A-4lyhjqgiZjra_k6aifd7GZTWLZmWiQaEbLAZNRyV-E42xChbWlGCVB7puvZgxEK6R5hhzVuveAr-r55hf0OBmvBYuD
    aws glacier get-job-output --vault-name NAS-Personal --account-id 999999999999 --job-id A-4lyhjqgiZjra_k6aifd7GZTWLZmWiQaEbLAZNRyV-E42xChbWlGCVB7puvZgxEK6R5hhzVuveAr-r55hf0OBmvBYuD output.json
    aws glacier delete-archive --vault-name NAS-Personal --account-id 999999999999 --archive-id="*** archiveid ***"
    
    aws glacier initiate-job --vault-name NAS-Mediafiles --account-id 999999999999 --job-parameters '{"Type": "inventory-retrieval"}'
    aws glacier describe-job --vault-name NAS-Mediafiles --account-id 999999999999 --job-id AXG9He9_pzlGqrpCRCcU9Yi2xy6RGP3I26AkMrbaF7hsmOso9RyJNM1Gxn2mXhiDEipOHSaOsAaCntTLjPrftc759VKC
    aws glacier get-job-output --vault-name NAS-Mediafiles --account-id 999999999999 --job-id AXG9He9_pzlGqrpCRCcU9Yi2xy6RGP3I26AkMrbaF7hsmOso9RyJNM1Gxn2mXhiDEipOHSaOsAaCntTLjPrftc759VKC output.json
    aws glacier delete-archive --vault-name NAS-Mediafiles --account-id 999999999999 --archive-id="*** archiveid ***"
``` 

## Python Script zum Erstellen des Löschscripts

```python
    import json
    
    # read file
    with open('output.json', 'r') as myfile:
        data=myfile.read()
    
    # parse file
    obj = json.loads(data)
    
    # show values
    #print("VaultARN: " + str(obj['VaultARN']))
    txt = str(obj['VaultARN'])
    arr = txt.partition(':vaults/')
    tok = arr[0]
    vaultname = arr[2]
    accountid = tok.rpartition(':')[2]
    archiveid = 'unknown'
    
    print ("#! /bin/sh")
    print ("echo JobID: " + arr[0]);
    print ("echo accountid: " + accountid);
    print ("echo vaultname: " + vaultname);
    
    ct = 0
    for elem in obj['ArchiveList']:
    	archiveid = str(elem['ArchiveId'])
    	print ("aws glacier delete-archive --vault-name "+vaultname+" --account-id "+accountid+" --archive-id=\"" + archiveid +"\"")
    	print ("echo -n " + str(ct))
    	ct = ct + 1
    print (str(ct) + " deleted archives")
``` 
